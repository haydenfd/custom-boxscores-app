import React from 'react'
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

export const PreferenceForm = () => {

    return (
        <div className='w-full bg-blue-300 text-left p-2'>
        <CheckboxGroup
          label="Select cities"
          orientation='horizontal'
          defaultValue={["buenos-aires", "london"]}
        >
          <Checkbox value="buenos-aires" className='mx-4'>Buenos Aires</Checkbox>
          <Checkbox value="sydney" className='mx-4'>Sydney</Checkbox>
          <Checkbox value="san-francisco" className='mx-4'>San Francisco</Checkbox>
          <Checkbox value="london" className='mx-4'>London</Checkbox>
          <Checkbox value="tokyo" className='mx-4'>Tokyo</Checkbox>
        </CheckboxGroup>
        </div>
      );

}
