import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const { pathname } = useLocation();
	console.log(pathname);

	return (
		<header>
			<h1 className='logo'>
				<Link to='/'>AVALLION</Link>
			</h1>

			<ul className='gnb'>
				<li>
					<Link to='/brandstory' className={pathname === '/brandstory' ? 'on' : ''}>
						Brand Story
					</Link>
				</li>
				<li>
					<Link to='/post' className={pathname === '/post' ? 'on' : ''}>
						POST
					</Link>
				</li>
				<li>
					<Link to='/gallery' className={pathname === '/gallery' ? 'on' : ''}>
						GALLERY
					</Link>
				</li>
				<li>
					<Link to='/youtube' className={pathname === '/youtube' ? 'on' : ''}>
						YOUTUBUE
					</Link>
				</li>
				<li>
					<Link to='/contact' className={pathname === '/contact' ? 'on' : ''}>
						CONTACT
					</Link>
				</li>
			</ul>
		</header>
	);
}
