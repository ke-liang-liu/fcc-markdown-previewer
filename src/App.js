import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const marked = require('marked');
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});
// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

const useStyles = makeStyles(theme => ({
  parent: {
    display: 'flex',
    justifyContent: 'center',
  },
  child: {
    margin: theme.spacing(1),
    width: '40%',
  }
}));

function App() {
  const classes = useStyles();
  const [markdown, setMarkdown] = React.useState(placeholder);

  const handleChange = event => {
    setMarkdown(event.target.value);
  };

  return (
    <div >
      <form className={classes.parent} noValidate autoComplete="off">
        <TextField
          className={classes.child}
          style={{ height: '80%' }}
          id="editor"
          label="Editor"
          multiline
          rows='45'
          variant="outlined"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id='preview'
          className={classes.child}
          style={{ border: '1px solid lightgrey', display: 'inline-block' }}
          dangerouslySetInnerHTML={{ __html: marked(markdown, { renderer: renderer }) }} />

      </form>
    </div>
  );
}

export default App;

const placeholder =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

