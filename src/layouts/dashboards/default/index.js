// @mui material components
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useRef, useState } from "react";
import { Card } from "@mui/material";
import useAutoRefreshUser from "hook/useAutoRefreshUser";

function Default() {
  useAutoRefreshUser();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const canvasRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const settings = {
      particles: {
        length: 2000,
        duration: 2,
        velocity: 100,
        effect: -1.3,
        size: 13,
      },
    };

    class Point {
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }
      clone() {
        return new Point(this.x, this.y);
      }
      length(length) {
        if (length === undefined) return Math.sqrt(this.x ** 2 + this.y ** 2);
        this.normalize();
        this.x *= length;
        this.y *= length;
        return this;
      }
      normalize() {
        const length = this.length();
        this.x /= length;
        this.y /= length;
        return this;
      }
    }

    class Particle {
      constructor() {
        this.position = new Point();
        this.velocity = new Point();
        this.acceleration = new Point();
        this.age = 0;
      }
      initialize(x, y, dx, dy) {
        this.position.x = x;
        this.position.y = y;
        this.velocity.x = dx;
        this.velocity.y = dy;
        this.acceleration.x = dx * settings.particles.effect;
        this.acceleration.y = dy * settings.particles.effect;
        this.age = 0;
      }
      update(deltaTime) {
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
        this.velocity.x += this.acceleration.x * deltaTime;
        this.velocity.y += this.acceleration.y * deltaTime;
        this.age += deltaTime;
      }
      draw(context, image) {
        const ease = (t) => --t * t * t + 1;
        const size = image.width * ease(this.age / settings.particles.duration);
        context.globalAlpha = 1 - this.age / settings.particles.duration;
        context.drawImage(
          image,
          this.position.x - size / 2,
          this.position.y - size / 2,
          size,
          size
        );
      }
    }

    class ParticlePool {
      constructor(length) {
        this.particles = new Array(length).fill().map(() => new Particle());
        this.firstActive = 0;
        this.firstFree = 0;
        this.duration = settings.particles.duration;
      }

      add(x, y, dx, dy) {
        this.particles[this.firstFree].initialize(x, y, dx, dy);
        this.firstFree = (this.firstFree + 1) % this.particles.length;
        if (this.firstActive === this.firstFree) {
          this.firstActive = (this.firstActive + 1) % this.particles.length;
        }
      }

      update(deltaTime) {
        for (let i = this.firstActive; i !== this.firstFree; i = (i + 1) % this.particles.length) {
          this.particles[i].update(deltaTime);
        }
        while (
          this.particles[this.firstActive].age >= this.duration &&
          this.firstActive !== this.firstFree
        ) {
          this.firstActive = (this.firstActive + 1) % this.particles.length;
        }
      }

      draw(context, image) {
        for (let i = this.firstActive; i !== this.firstFree; i = (i + 1) % this.particles.length) {
          this.particles[i].draw(context, image);
        }
      }
    }

    function pointOnHeart(t) {
      return new Point(
        160 * Math.pow(Math.sin(t), 3),
        130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
      );
    }

    const particlePool = new ParticlePool(settings.particles.length);
    const particleRate = settings.particles.length / settings.particles.duration;

    const particleImage = (() => {
      const tmpCanvas = document.createElement("canvas");
      const tmpCtx = tmpCanvas.getContext("2d");
      tmpCanvas.width = settings.particles.size;
      tmpCanvas.height = settings.particles.size;

      function to(t) {
        const point = pointOnHeart(t);
        point.x = settings.particles.size / 2 + (point.x * settings.particles.size) / 350;
        point.y = settings.particles.size / 2 - (point.y * settings.particles.size) / 350;
        return point;
      }

      tmpCtx.beginPath();
      let t = -Math.PI;
      let point = to(t);
      tmpCtx.moveTo(point.x, point.y);
      while (t < Math.PI) {
        t += 0.01;
        point = to(t);
        tmpCtx.lineTo(point.x, point.y);
      }
      tmpCtx.closePath();
      tmpCtx.fillStyle = "#FF5CA4";
      tmpCtx.fill();

      const image = new Image();
      image.src = tmpCanvas.toDataURL();
      return image;
    })();

    function render() {
      requestAnimationFrame(render);
      const newTime = new Date().getTime() / 1000;
      const deltaTime = newTime - (window.__lastHeartRender || newTime);
      window.__lastHeartRender = newTime;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const amount = particleRate * deltaTime;
      // for (let i = 0; i < amount; i++) {
      //   const pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      //   const dir = pos.clone().length(settings.particles.velocity);
      //   particlePool.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
      // }
      // const centerX = canvas.width / 2;
      // const centerY = canvas.height / 2;
      // for (let i = 0; i < amount; i++) {
      //   const pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      //   const dir = pos.clone().length(settings.particles.velocity);
      //   particlePool.add(centerX + pos.x, centerY - pos.y, dir.x, -dir.y);
      // }

      particlePool.update(deltaTime);
      particlePool.draw(context, particleImage);

      const baseSize = 600;
      const scale = Math.min(canvas.width, canvas.height) / baseSize;

      for (let i = 0; i < amount; i++) {
        const pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());

        // scale vị trí
        pos.x *= scale;
        pos.y *= scale;

        const dir = pos.clone().length(settings.particles.velocity);
        particlePool.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
      }
    }

    function onResize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    window.addEventListener("resize", onResize);
    onResize();
    setTimeout(render, 100);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <div style={{ height: "100%" }}>
            <Card sx={{ height: "600px", position: "relative", background: "white" }}>
              <canvas
                ref={canvasRef}
                style={{
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%", // Để layout đúng
                  height: "100%", // Để layout đúng
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  color: "#FF5CA4",
                  fontSize: "28px",
                  fontStyle: "italic",
                  textAlign: "center",
                  marginTop: "30%",
                  transform: "translateY(-50%)",
                }}
              >
                {/* ECG */}
              </div>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <></>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <></>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Default;
