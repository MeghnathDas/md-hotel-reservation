export interface NavMenuItem {
  id: number;
  caption: string;
  route: string;
  childItems: NavMenuItem[];
}
