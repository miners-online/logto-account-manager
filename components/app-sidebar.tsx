"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { User } from "@/lib/user"

const data = {
  navMain: [
    {
      title: "Your Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Personal Info",
          url: "#",
        },
        {
          title: "Sign-in & Security",
          url: "#",
        },
        {
          title: "Privacy Settings",
          url: "#",
        },
        {
          title: "Connections",
          url: "#",
        },
        {
          title: "Your Data",
          url: "#",
        },
        {
          title: "Account Actions",
          url: "#",
        },
      ],
    },
  ],
}

interface AppSidebarProps {
  user: User;
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[] | undefined;
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      {props.teams && (
        <SidebarHeader>
          <TeamSwitcher teams={props.teams} />
        </SidebarHeader>
      )}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
