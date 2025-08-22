export default function Button({ as: Tag = 'button', className = '', children, ...props }) {
return (
<Tag className={`btn btn-primary ${className}`} {...props}>
{children}
</Tag>
)
}