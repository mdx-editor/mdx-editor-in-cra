import { MDXEditor } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
// importing the editor and the plugin from their full paths



function App() {
  return (
    <MDXEditor markdown='Hello world' />
  );
}

export default App;
