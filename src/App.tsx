import { FlexContainer } from './ui-kit/container';
import styles from './index.module.scss';
import { Textarea } from './ui-kit/text-area';
import { useState } from 'react';
import { Button } from './ui-kit/button';

function App() {
  const [text, setText] = useState('');

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <FlexContainer fullPage centered>
      <FlexContainer customClass={styles.formContainer}>
        <Textarea placeholder="Enter the text" onChange={onTextChange} value={text} />

        <Button label="Submit" onClick={() => console.log(text)} />
      </FlexContainer>
    </FlexContainer>
  );
}

export default App;
