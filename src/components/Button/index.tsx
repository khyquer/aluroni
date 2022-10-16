interface Props {
	className?: string,
    children?: React.ReactNode
	onClick?: () => void
}

const Button = ({className, children, onClick}: Props) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;