import * as React from 'react'

interface ICommitMessageProps {
  onCreateCommit: (title: string) => void
}

interface ICommitMessageState {
  title: string
}

export class CommitMessage extends React.Component<ICommitMessageProps, ICommitMessageState> {

  public constructor(props: ICommitMessageProps) {
    super(props)

    this.state = {
      title: ''
    }
  }

  /** TODO: commit description field */
  /** TODO: disable submit when no files selected */

  private handleTitleChange(event: any) {
    this.setState({title: event.target.value})
  }

  private handleSubmit(event: any) {
    this.props.onCreateCommit(this.state.title)
    this.setState({title: ''})
    event.preventDefault()
  }

  public render() {
    return (
      <form id='commit-message' className='full-width' onSubmit={event => event.stopPropagation()}>
        <input type='text'
               className='full-width'
               placeholder='Commit summary'
               value={this.state.title}
               onChange={event => this.handleTitleChange(event) } />

        <button onClick={event => this.handleSubmit(event)}>
          Commit Changes
        </button>
      </form>
    )
  }
}
