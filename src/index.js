import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('custsom-block/text-box', {
	edit: Edit,
	save,
});
