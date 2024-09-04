import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	// 	ToolbarButton,
	// 	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';
// import { AlignmentControl, AlignmentToolbar } from '@wordpress/block-editor';
// import { AlignmentToolbar } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	// console.log(attributes);
	const { text, alignment } = attributes;

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onChangeAlignment = (newAlignmenet) => {
		setAttributes({ alignment: newAlignmenet });
	};

	return (
		<>
			{/* <BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>
			<BlockControls
				group="other"
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						// onClick: () => console.log( 'Button 1 Clicked' ),
					},
					{
						title: 'Button 2',
						icon: 'admin-collapse',
						// onClick: () => console.log( 'Button 2 Clicked' ),
					},
				]}
			>
				{text && (
					<ToolbarGroup>
						<ToolbarButton
							title={__('Align Left', 'text-box')}
							icon="editor-alignleft"
							// onClick={ () => console.log( 'Align Left' ) }
						/>
						<ToolbarButton
							title={__('Align Center', 'text-box')}
							icon="editor-aligncenter"
							// onClick={ () => console.log( 'Align center' ) }
						/>
						<ToolbarButton
							title={__('Align Right', 'text-box')}
							icon="editor-alignright"
							// onClick={ () => console.log( 'Align Right' ) }
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={__('More Alignments', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-width',
								},
							]}
						/>
					</ToolbarGroup>
				)}
				<ToolbarGroup>
					<p>Group 2</p>
				</ToolbarGroup>
			</BlockControls> */}

			<BlockControls>
				<ToolbarGroup>
					<p>Group 1</p>
				</ToolbarGroup>
				<AlignmentToolbar
					value={alignment} // to highlight the alignment icon
					onChange={onChangeAlignment}
				/>
				<ToolbarGroup>
					<p>Group 2</p>
				</ToolbarGroup>
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Enter your tex…', 'text-box')}
				tagName="h4"
				allowedFormats={[
					'core/bold',
					'core/italic',
					'core/image',
					'core/text-color',
				]}
				style={{ textAlign: alignment }}
			/>
		</>
		// RichText Docs
		// https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md
	);
}
