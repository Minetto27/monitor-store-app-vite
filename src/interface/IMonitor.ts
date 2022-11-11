export const BRAND_NAMES = ["Dell", "HP", "IBM", "Lenovo"] as const;
export const SCREEN_SIZES = [17, 19, 21, 23, 25] as const;

type BrandNameType = typeof BRAND_NAMES[number];
type ScreenSizeType = typeof SCREEN_SIZES[number];

export interface IMonitorItem {
  productNumber: string;
  brand: BrandNameType;
  screenSize: ScreenSizeType;
  price: number;
  quantity: number;
}
