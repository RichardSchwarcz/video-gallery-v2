const onPathname = (path: string) => {
  if (path === '/') {
    return {
      button: 'Welcome Home!',
      input: 'Welcome Home!',
      search: './Home/',
      paddingLeft: '5.1rem',
    }
  }
  if (path === '/videos') {
    return {
      button: 'Add New Video',
      input: 'Enter video URL',
      search: './Videos/',
      paddingLeft: '5.3rem',
    }
  }
  return {
    button: 'Add New Video',
    input: 'Enter video URL',
    search: './Videos/',
    paddingLeft: '5.25rem',
  }
}

export default onPathname