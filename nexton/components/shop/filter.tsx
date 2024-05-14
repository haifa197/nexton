"use client";
import React, { useRef, useState } from "react";
import { Image, Text, Box, HStack, Flex, Stack, Divider, CheckboxGroup, VStack, Checkbox, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Input, InputGroup, InputRightElement, RadioGroup, Radio } from '@chakra-ui/react';

export default function FilterShop() {
    const [value, setValue] = React.useState('1')
    return (
        <>
          <Flex my={10} 
             flexWrap={"wrap"}
             alignItems={{ base: "center", lg: "start" }}
             gap={6}
             flexDirection={"row"}>
           <Box w={'full'}>
           <Text as={'b'} fontSize={18}>
              Categories
            </Text>
            <CheckboxGroup defaultValue={[ 'kakashi']}>
                <Stack mt={4} spacing={1}>
                    <Checkbox value='naruto'>Naruto</Checkbox>
                    <Checkbox value='sasuke'>Sasuke</Checkbox>
                    <Checkbox value='kakashi'>Kakashi</Checkbox>
                    <Checkbox value='naruto'>Naruto</Checkbox>
                    <Checkbox value='sasuke'>Sasuke</Checkbox>
                    <Checkbox value='kakashi'>Kakashi</Checkbox>
                    <Checkbox value='naruto'>Naruto</Checkbox>
                    <Checkbox value='sasuke'>Sasuke</Checkbox>
                    <Checkbox value='kakashi'>Kakashi</Checkbox>
                </Stack>
            </CheckboxGroup>
           </Box>
            <Divider />
            <Box w={'full'}>
                <Text as={'b'} fontSize={18}>
                Price range
                </Text>
                <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]} >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
                <HStack>
                    <Box>
                    <Text>Max price</Text>
                    <InputGroup>
                        <InputRightElement width='2rem'>
                        $
                        </InputRightElement>
                        <Input  
                            borderRadius={'20px'}
                            border={'solid 1px'}
                            borderColor={'#4B5563'}
                            placeholder='Max'
                        />
                    </InputGroup>
                    </Box>
                    <Box>
                    <Text>Min price</Text>
                    <InputGroup>
                        <InputRightElement width='2rem'>
                        $
                        </InputRightElement>
                    <Input  
                        borderRadius={'20px'}
                        border={'solid 1px'}
                        borderColor={'#4B5563'}
                        placeholder='Min'
                    />
                    </InputGroup>
                    </Box>
                </HStack>
            </Box>
            <Divider />
           <Box w={'full'}> 
            <Text as={'b'} fontSize={18}>
              Sort order
            </Text>
            <RadioGroup onChange={setValue} value={value}>
      <Stack mt={4} spacing={1}>
        <Radio value='1'>1</Radio>
        <Radio value='2'>2</Radio>
        <Radio value='3'>3</Radio>
        <Radio value='4'>4</Radio>
        <Radio value='5'>5</Radio>
      </Stack>
    </RadioGroup>
            </Box>
          </Flex>
        </>
    )
}