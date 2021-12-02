import React, { useState } from 'react';
import { styles } from './styles';
import { Props } from './props';

const emptyEvent = {
  target: { value: '' },
} as React.ChangeEvent<HTMLInputElement>;

const getOptions = (
  value: string,
  options: Array<Object>,
  maxVisibleOptions: number
) => {
  return options
    .filter(
      (option) =>
        JSON.stringify(option).toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    .slice(0, maxVisibleOptions);
};

export const Autocomplete: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    showOptions: boolean
  ) => {
    setValue(event.target.value);
    setShowOptions(showOptions);
    props.onChange && props.onChange(event);
  };

  const renderOptions = (value: string) => {
    const max = props.maxVisibleOptions ? props.maxVisibleOptions : 3;
    return getOptions(value, props.options, max).map((option, index) => {
      return (
        <div key={`option-${index}`}>
          {props.renderOption ? props.renderOption(option) : option.toString()}
        </div>
      );
    });
  };

  return (
    <div
      className="ce-autocomplete"
      style={{ ...styles.style, ...props.style }}
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
