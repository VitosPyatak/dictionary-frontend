export type TextAreaProps = {
    rows?: number
    cols?: number
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    value?: string
    placeholder: string;
}