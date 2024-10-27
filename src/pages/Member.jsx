import Layout from '../components/Layout';

export default function BrandStory() {
	const memberData = [
		{ name: 'Alvano', text: 'CEO', pic: '/CEO.png' },
		{ name: 'Peter', text: 'Creative', pic: '/creative.png' },
		{ name: 'Paul', text: 'Model', pic: '/model.png' },
		{ name: 'Perfume', text: 'Best Product', pic: '/p1.jpg' }
	];

	return (
		<Layout title='BrandStory'>
			<article className='ceoBox'>
				<div className='story'>
					<p>향기의 권위자 Alvano의 첫 Brand 론칭</p>
					<p>남자의 향을 완성하다</p>
				</div>
				<div className='txt'>
					<img className='ceo' src={memberData[0].pic} alt={memberData[0].name} />
					<h2>{memberData[0].name}</h2>
					<p>{memberData[0].text}</p>
				</div>
			</article>

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
		</Layout>
	);
}
