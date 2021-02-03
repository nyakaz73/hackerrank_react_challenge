import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
const people = [
	{
		name: "John Sina",
		birth: "11/30/2011"
	}, {
		name: "Barcy Washington",
		birth: "09/16/1992"
	}, {
		name: "Peter Parker",
		birth: "01/16/1992"
	}, {
		name: "Jimmy Shergil",
		birth: "12/12/2001"
	}, {
		name: "Alexander Alfred",
		birth: "02/09/1891"
	}, {
		name: "Krishna Gupta",
		birth: "12/01/1982"
	}, {
		name: "Sania Mirza",
		birth: "11/30/2011"
	}, {
		name: "Lata Pathak",
		birth: "10/31/1999"
	}
];
class Table extends Component {

	UNSAFE_componentWillReceiveProps({ sortParameter }) {
		console.log('componentWillReceiveProps', sortParameter);
		if (sortParameter === "name") {
			console.log('Sort by Name')
			this.compareNames();
		} else if (sortParameter === "age") {
			console.log('Sort by Age')
			this.compareDates()
		}
	}

	compareDates = () => {
		// complete this date comparator which enables sort by age
		console.log(people)
		people.sort((a, b) => {
			var dateA = new Date(a.birth), dateB = new Date(b.birth)
			return dateB - dateA
		})
		console.log(people)
	}

	compare = (a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	}


	compareNames = () => {
		people.sort(this.compare)
	}





	render() {
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{people.map((person, index) => (
							<tr key={index}>
								<td>{person.name}</td>
								<td>{person.birth}</td>
							</tr>
						))

						}

					</tbody>
				</table>


			</div>
		);

	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
