#!/bin/bash

mkdir ./src/$1

echo "import React from 'react';import { Props } from './props';export const index: React.FC<Props> = ({}) => {return <div />;};" > ./src/$1/index.tsx
echo "export interface Props {}" > ./src/$1/props.tsx
echo "" > ./src/$1/stories.tsx
echo "import { Properties } from 'csstype';export const styles = {example: {} as Properties,};" > ./src/$1/styles.tsx
echo "" > ./src/$1/.test.tsx