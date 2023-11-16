import { useMemo } from "react"
import { FlexContainerProps } from "./types"
import styles from './index.module.scss';


export const useFlexContainerStyles = ({
    fullPage,
    centered,
    customClass
}: Partial<FlexContainerProps>) => {
    const callback = () => {
        const classes: string[] = [styles.container, customClass || ''];
        fullPage && classes.push(styles.fullPage);
        centered && classes.push(styles.centered);
        return classes.join(' ');
    }

    return useMemo(callback, [fullPage])
}