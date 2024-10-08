import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { text, alignment } = attributes;
	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${alignment}`,
			})}
			tagName="h4"
			value={text}
		/>
	);
}
