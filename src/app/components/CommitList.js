import { AutoSizer, VirtualScroll } from 'react-virtualized';
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import { connect } from 'react-redux';
import moment from 'moment';
import { setSelectedCommit } from '~/src/app/actions/selectedCommit';

class CommitList extends Component {
  render() {
    const { dispatch, commits } = this.props;
    const ellipsisStyle = {
      width: '100%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    };
    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualScroll
            width={width}
            height={height}
            rowCount={commits.count()}
            rowHeight={72}
            rowRenderer={({ index }) => {
              const commit = commits.get(index);
              const md5 = commit.get('md5');
              const time = commit.get('time') || 0;
              const timeMs = time * 1000;
              const fromNow = moment(timeMs).fromNow();
              const gravatarUrl = `https://www.gravatar.com/avatar/${md5}`;
              if (!commit) {
                return null;
              }
              return (
                <ListItem
                  leftAvatar={<Avatar src={gravatarUrl} />}
                  primaryText={
                    <div style={ellipsisStyle}>
                      <strong>#{index + 1}:</strong>
                      &nbsp;
                      {commit.get('subject')}
                    </div>
                  }
                  secondaryText={
                    <div style={ellipsisStyle}>
                      <strong>{commit.get('name')}</strong>
                      &nbsp;committed&nbsp;
                      <strong>{fromNow}</strong>
                    </div>
                  }
                  onTouchTap={() => {
                    dispatch(setSelectedCommit(commit));
                  }}
                />
              );
            }}
          />
        )}
      </AutoSizer>
    );
  }
}

export default connect((state) => {
  return {
    commits: state.commits
  };
})(CommitList);
