import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	// console.log(attributes);
	const { text } = attributes;

	return (
		// <p {...useBlockProps()}>
		// 	{__('Boilerplate – hello from the editor!', 'boilerplate')}
		// </p>
		<RichText
			{...useBlockProps()}
			onChange={(textvalue) => setAttributes({ text: textvalue })}
			value={text}
			placeholder={__('Enter your tex…', 'text-box')}
			tagName="h4"
			allowedFormats={[
				'core/bold',
				'core/italic',
				'core/image',
				'core/text-color',
			]}
		/>
		// RichText Docs
		// https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md
	);
}
