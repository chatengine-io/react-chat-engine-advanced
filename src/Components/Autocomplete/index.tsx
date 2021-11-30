import React, { useState } from 'react';
import { styles } from './styles';
import { Props } from './props';

const emptyEvent = {
  target: { value: '' },
} as React.ChangeEvent<HTMLInputElement>;

export const Autocomplete: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const getOptions = (value: string) => {
    let count = 0;
    const max = props.maxVisibleOptions ? props.maxVisibleOptions : 3;
    return props.options.filter(
      (option) =>
        JSON.stringify(option).toLowerCase().indexOf(value.toLowerCase()) !==
          -1 && count < max
    );
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    showOptions: boolean
  ) => {
    setValue(event.target.value);
    setShowOptions(showOptions);
    props.onChange && props.onChange(event);
  };

  const renderOptions = (value: string) => {
    return getOptions(value).map((option, index) => {
      return <div key={`option-${index}`}>{props.renderOption(option)}</div>;
    });
  };

  return (
    <div
      className="ce-autocomplete"
      style={{ ...{ position: 'relative' }, ...props.style }}
    >
      <input
        className="ce-autocomplete-input"
        value={value}
        placeholder={props.label}
        style={{ ...styles.inputStyle, ...props.inputStyle }}
        onBlur={(e) => {
          setShowOptions(false);
          props.onBlur && props.onBlur(e);
        }}
        onChange={(e) => onChange(e, true)}
        onFocus={(e) => {
          setShowOptions(true);
          props.onFocus && props.onFocus(e);
        }}
      />

      <div
        className="ce-autocomplete-close"
        onClick={() => onChange(emptyEvent, true)}
        style={{
          ...styles.closeStyle,
          ...{ display: value.length > 0 ? 'inline-block' : 'none' },
          ...props.closeStyle,
        }}
      >
        ❌
      </div>

      <div
        style={{
          ...styles.optionsStyle,
          ...{ height: showOptions ? 'auto' : '0px' },
          ...props.optionsStyle,
        }}
      >
        {renderOptions(value)}
      </div>
    </div>
  );
};
