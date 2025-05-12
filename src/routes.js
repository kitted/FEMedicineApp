// Soft UI Dashboard PRO React layouts
import Default from "layouts/dashboards/default";
// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import ChiTietBenhNhan from "layouts/quan-ly-benh-nhan/chi-tiet";
import QuanLyBenhNhan from "layouts/quan-ly-benh-nhan";
// import ChiTietECG from "layouts/quan-ly-benh-nhan/chi-tiet-ecg";

const routes = [
  {
    type: "collapse",
    name: "Bảng điều khiển",
    key: "dashboards",
    icon: <Shop size="12px" />,
    route: "/dashboards",
    noCollapse: true,
    component: <Default />,
    permission: ["admin"],
  },
  { type: "title", title: "Quản lý", key: "title-quan-ly", permission: ["admin", "user"] },

  {
    type: "collapse",
    name: "Quản lý bệnh nhân",
    key: "quan-ly-benh-nhan",
    icon: <Office size="12px" />,
    route: "/quan-ly-benh-nhan/benh-nhan",
    component: <QuanLyBenhNhan />,
    permission: ["admin"],

    collapse: [
      {
        name: "Bệnh nhân",
        key: "quan-ly-benh-nhan",
        route: "/quan-ly-benh-nhan/benh-nhan",
        component: <QuanLyBenhNhan />,
        permission: ["admin"],
        hidden: true,
      },
      {
        name: "Bệnh nhân",
        key: "quan-ly-benh-nhan",
        route: "/quan-ly-benh-nhan/benh-nhan/create",
        component: <ChiTietBenhNhan />,
        permission: ["admin"],
        hidden: true,
      },
      {
        name: "Bệnh nhân",
        key: "quan-ly-benh-nhan",
        route: "/quan-ly-benh-nhan/benh-nhan/:id",
        component: <ChiTietBenhNhan />,
        permission: ["admin"],
        hidden: true,
      },
      {
        name: "Bệnh nhân",
        key: "quan-ly-benh-nhan",
        route: "quan-ly-benh-nhan/benh-nhan/:id/edit",
        component: <ChiTietBenhNhan />,
        permission: ["admin"],
        hidden: true,
      },
      // {
      //   name: "Bệnh nhân",
      //   key: "quan-ly-benh-nhan",
      //   route: "quan-ly-benh-nhan/ecg/:id/edit",
      //   component: <ChiTietECG />,
      //   permission: ["admin"],
      //   hidden: true,
      // },
      // {
      //   name: "Bệnh nhân",
      //   key: "quan-ly-benh-nhan",
      //   route: "/quan-ly-benh-nhan/ecg/:id",
      //   component: <ChiTietECG />,
      //   permission: ["admin"],
      //   hidden: true,
      // },
      // {
      //   name: "Bệnh nhân",
      //   key: "quan-ly-benh-nhan",
      //   route: "/quan-ly-benh-nhan/ecg/create/:id",
      //   component: <ChiTietECG />,
      //   permission: ["admin"],
      //   hidden: true,
      // },
    ],
    noCollapse: true,
  },
];

export default routes;
