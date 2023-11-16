export type FlexContainerProps = {
    children: JSX.Element | JSX.Element[] | string;
    fullPage?: boolean
    centered?: boolean
    customClass?: string
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}