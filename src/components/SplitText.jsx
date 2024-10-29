import { motion } from 'framer-motion';

export default function SplitText({ children, duration = 0.5, interval = 0.1, delay = 0, style }) {
	const textArr = children.split('');

	return (
		<p style={{ ...style }}>
			{textArr.map((el, idx) => (
				<motion.span
					style={{
						display: 'inline-block'
						// 스타일을 부모에서 받아오도록 설정
					}}
					key={idx}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: duration, delay: interval * idx + delay }}>
					{el}
				</motion.span>
			))}
		</p>
	);
}
