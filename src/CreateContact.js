import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeFrom from 'form-serialize'

class CreateContact extends Component {

	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeFrom(e.target, { hash: true })
		if (this.props.onCreateContact)
			this.props.onCreateContact(values)
	}

	render() {
		return (
			<div>
				<Link className='close-create-contact' to='/'>Close</Link>
				<form onSubmit={this.handleSubmit} className='create-contact-form'>
					<ImageInput
						className='create-contact-avatar-input'
						name='avatarURL'
						maxHeight={64}
					/>
					<div className='create-contact-details'>
						<input type='text' name='name' placeholder='First Last' required />
						<input type='text' name='email' placeholder='Email' required />
						<input type='text' name='handle' placeholder='@handle' required />
						<button>Add Contact</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateContact