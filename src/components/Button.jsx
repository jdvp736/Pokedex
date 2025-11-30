export const Button = (
    {
        className = '',
        children,
        ...props
    }
)=>{
    return (
        <button
            {...props}
            className={[
                'btn transition-all duration-300 ease-out active:scale-95 hover:shadow-lg hover:-translate-y-1',
                className
            ].join(' ')}
        >
            {children}
        </button>
    )
}
