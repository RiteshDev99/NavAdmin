import { useColorScheme } from 'react-native';
import { themeColors } from '@/src/constants/color';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof themeColors.light | keyof typeof themeColors.dark
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        // @ts-ignore
        return themeColors[theme][colorName];
    }
}
