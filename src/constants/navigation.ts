import AIDiet from "../components/views/AIDiet";
import Assessment from "../components/views/Assessment";
import Dashboard from "../components/views/Dashboard";
import Learn from "../components/views/Learn";
import Lifestyle from "../components/views/Lifestyle";
import type { Tab } from "../components/navigation/types";
import {
    Activity,
    BarChart3,
    BookOpen,
    Bot,
    Heart,
    Home as HomeIcon,
    User,
  } from "lucide-react";
import Profile from "../components/views/Profile";
import Home from "../components/views/Home";

export const navigationTabs: Tab[] = [
    {
      id: 1,
      icon: HomeIcon,
      title: "Home",
      href: "/",
      component: Home
    },
    {
      id: 2,
      icon: Heart,
      title: "Assessment",
      href: "/",
      component: Assessment,
    },
    {
      id: 3,
      icon: Activity,
      title: "Lifestyle",
      href: "/",
      component: Lifestyle,
    },
    {
      id: 4,
      icon: Bot,
      title: "AI Diet",
      href: "/",
      component: AIDiet,
    },
    {
      id: 5,
      icon: BookOpen,
      title: "Learn",
      href: "/",
      component: Learn,
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Dashboard",
      href: "/",
      component: Dashboard,
    },
    {
      id: 7,
      icon: User,
      title: "Profile",
      href: "/",
      component: Profile,
    },
  ];