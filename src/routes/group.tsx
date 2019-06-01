import * as React from 'react';
import { PortfolioContext, IGroup } from '../portfolio';
import { Link } from 'react-router-dom';

export const Group: React.FC = (props: any) => {
	const { state } = React.useContext(PortfolioContext);
	const [group, setGroup] = React.useState<IGroup>();
	console.log(props.match);

	React.useEffect(() => {
		const activeGroup = props.match.params.groupId;
		let search;
		state.groups.forEach(group => {
			if (group.id === activeGroup) {
				search = group;
			}
		});
		setGroup(search);
	}, [props.match.params.groupId]);

	if (group) {
		return (
			<ul>
				{group.images.map((image, index) => (
					<Link key={index} to={`/${group.id}/${image.id}`}>
						<li key={index} style={{ backgroundImage: `url(${image.url})` }} aria-label={image.name} />
					</Link>
				))}
			</ul>
		)
	}
	return null;
}