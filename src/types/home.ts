export type SidebarOptionsProps = {
  children: React.ReactNode;
  href: string;
}

export type HeaderOptionsProps = SidebarOptionsProps;

export type HomeLayoutProps = Pick<SidebarOptionsProps, "children">