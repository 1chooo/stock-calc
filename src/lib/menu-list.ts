import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  ChartColumnBig,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Portfolio",
      menus: [
        {
          href: "",
          label: "Posts",
          icon: SquarePen,
          submenus: [
            {
              href: "posts",
              label: "All Posts"
            },
            {
              href: "posts/new",
              label: "New Post"
            }
          ]
        },
        {
          href: "categories",
          label: "Categories",
          icon: Bookmark
        },
        {
          href: "stats",
          label: "stats",
          icon: ChartColumnBig
        },
        {
          href: "tags",
          label: "Tags",
          icon: Tag
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "users",
          label: "Users",
          icon: Users
        },
        {
          href: "account",
          label: "Account",
          icon: Settings
        }
      ]
    }
  ];
}
