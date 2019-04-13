import React, { Component } from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api';

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: null,
    modalIsOpen: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {
      match: {
        params: {
          badgeId,
        },
      },
    } = this.props

    this.setState({
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.read(badgeId)
      this.setState({
        loading: false,
        data,
      })
    } catch (error) {
      this.setState({
        loading: false,
        error,
      })
    }
  }

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true })
  }

  handleDeleteBadge = async () => {
    const {
      history: {
        push,
      },
      match: {
        params: {
          badgeId,
        },
      },
    } = this.props

    this.setState({
      loading: true,
      error: null,
    })

    try {
      await api.badges.remove(badgeId)
      push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error,
      })
    }
  }

  render() {
    const {
      loading,
      error,
      modalIsOpen,
    } = this.state

    if (loading) return <PageLoading />

    if (error) return <PageError error={error} />

    const { data } = this.state

    return (
      <BadgeDetails 
        data={data} 
        onCloseModal={this.handleCloseModal} 
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={modalIsOpen}
      />
    )
  }
}

export default BadgeDetailsContainer