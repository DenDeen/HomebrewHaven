interface XPBar {
  currentXP: number;
  nextLevelXP: number;
}

interface AttributeItem {
  label: string;
  value: number;
}

interface ListItem {
  text: string;
  iconName: any;
  iconColor: string;
}

interface StatItem {
  iconName: any;
  label: string;
  value: string | number;
  color?: string;
  iconColor?: string;
}

interface Item {
  id: number;
  name: string;
  type: string,
  functionality: string,
  usage: string,
  description: string;
  icon?: string;
  color?: string;
}
