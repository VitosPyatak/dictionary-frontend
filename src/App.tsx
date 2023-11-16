import { FlexContainer } from './ui-kit/container';
import styles from './index.module.scss';
import { Textarea } from './ui-kit/text-area';
import { useMemo, useState } from 'react';
import { Button } from './ui-kit/button';
import { APIProvider } from './api-provider';
import { WordType } from './api-provider/configs';

function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState({} as Record<WordType, number>);

  const isTextValid = useMemo(() => !!text, [text]);

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const onSubmitPressed = () => {
    if (!isTextValid) return;
    APIProvider.countWords(text).then(setData);
  };

  return (
    <FlexContainer fullPage centered>
      <FlexContainer customClass={styles.formContainer}>
        <Textarea placeholder="Enter the text" onChange={onTextChange} value={text} />

        <Button label="Submit" onClick={onSubmitPressed} />

        <FlexContainer customClass={styles.responseContainer}>
          {Object.entries(data).map(([key, value]) => {
            return <span key={key}>{key}: {value}</span>;
          })}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default App;
