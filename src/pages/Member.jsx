import Layout from '../components/Layout';

export default function BrandStory() {
	const memberData = [
		{ name: 'Angelo', text: 'CEO', pic: '/CEO.jpg' },
		{ name: 'Peter', text: 'Creative', pic: '/creative.png' },
		{ name: 'Paul', text: 'Model', pic: '/model.png' },
		{ name: 'Perfume', text: 'Best Product', pic: '/p1.jpg' }
	];

	return (
		<Layout title='BrandStory'>
			<article className='ceoBox'>
				<div className='story'>
					<nav className='ceoTitle'>
						향기의 권위자 Angelo의
						<br /> 단독 Brand 론칭
					</nav>
					<nav className='ceoSubTitle'>
						<p>남자의 향을 완성하다</p>
						<p>since 1990</p>
						<p>젊은날의 성공을 함께 전달하다</p>
						<p></p>
					</nav>
				</div>

				<div className='ceoImg'>
					<img className='ceo' src={memberData[0].pic} alt={memberData[0].name} />
					<h2>{memberData[0].name}</h2>
					<p>{memberData[0].text}</p>
				</div>
			</article>

			<section className='mid'>
				<div className='mid1'></div>
				<div className='mid2'></div>
			</section>

			<section>
				{memberData.map((data, idx) => {
					if (idx !== 0) {
						return (
							// 리턴문 안쪽에 제일 부모 jsx요소엔 무조건 key={순서값} 적용
							<article key={idx}>
								<div className='pic'>
									<img className='others' src={data.pic} alt={data.name} />
								</div>
								<h3>{data.name}</h3>
								<p>{data.text}</p>
							</article>
						);
					}
				})}
			</section>

			<section className='last'>
				<div className='last1'></div>
				<div className='last2'></div>
			</section>
		</Layout>
	);
}
