import React from "react";

const Empresas = React.lazy(() => import("../Views/Empresas"));
const Favoritos = React.lazy(() => import("../Views/Favoritos"));
const Mercado = React.lazy(() => import("../Views/Mercado"));
const MiTienda = React.lazy(() => import("../Views/MiTienda"));
const Principal = React.lazy(() => import("../Views/Principal"));
const Profile = React.lazy(() => import("../Views/Profile"));

let Routes = [];

if (localStorage.getItem("rol") === "Visitante") {
  Routes = [
    {
      route: "/home/Principal",
      label: "Inicio",
      component: Principal,
      exact: true,
    },
    {
      route: "/home/Empresas",
      label: "Empresas",
      component: Empresas,
      exact: true,
    },
    {
      route: "/home/Favoritos",
      label: "Favoritos",
      component: Favoritos,
      exact: true,
    },
    {
      route: "/home/Mercado",
      label: "Mercado",
      component: Mercado,
      exact: true,
    },
    {
      route: "/home/perfil",
      label: "Mi perfil",
      component: Profile,
      exact: true,
    },
  ];
} else {
  Routes = [
    {
      route: "/home/Principal",
      label: "Inicio",
      component: Principal,
      exact: true,
    },
    {
      route: "/home/MiTienda",
      label: "Mi Tienda",
      component: MiTienda,
      exact: true,
    },
    {
      route: "/home/Empresas",
      label: "Empresas",
      component: Empresas,
      exact: true,
    },
    {
      route: "/home/Favoritos",
      label: "Favoritos",
      component: Favoritos,
      exact: true,
    },
    {
      route: "/home/Mercado",
      label: "Mercado",
      component: Mercado,
      exact: true,
    },
    {
      route: "/home/perfil",
      label: "Mi perfil",
      component: Profile,
      exact: true,
    },
  ];
}
export { Routes };
