export interface NavItem {
  title: string;
  href: string;
  dropdown?: {
    type: string;
    items: {
      category: string;
      items: {
        title: string;
        description: string;
        icon?: string;
        link?: string;
      }[];
    }[];
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  author: string;
  company: string;
  content: string;
  image: string;
}