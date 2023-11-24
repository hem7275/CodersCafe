import React from 'react'
import HelpPostList from '../../components/help/HelpPostList'
import CommentList from '../../components/comment/CommentList'

const HelpPage: React.FC = () => {
  return (
    <div>
      <HelpPostList />
      <CommentList />
    </div>
  )
}

export default HelpPage