import sizes from './sizes';
import bg from './bg.svg';

export default {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-out'
		}
	},
	root: {
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#291efa',
		/* background by SVGBackgrounds.com */
		backgroundImage: `url(${bg})`,
		overflow: 'scroll'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('lg')]: {
			width: '80%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		'& a': {
			color: 'white'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '1.5rem',
		justifyContent: 'center',
		[sizes.down('sm')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 85%)'
		}
	},
	button: {
		gridArea: '1 / 2 / 2 / 3',
		marginTop: '7rem',
		[sizes.down('sm')]: {
			gridArea: '1 / 1 / 2 / 3'
		}
	}
};
