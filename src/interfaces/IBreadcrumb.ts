export interface BreadcrumbItem {
  text: string;
  to?: {
    name: string;
    params?: { [key: string]: string | string[] };
  };
}