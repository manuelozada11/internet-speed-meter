## Internet speed meter Service (ISMS)

*v1.0.0*

### HOW TO USE

First, you must be sure that you've installed **fast-cli** globaly on your computer. If you don't have it, you can run this command.

`npm i --global fast-cli`

Then, if you want to make customized configurations, you must create **.env** file and save the following vars:

1. **SAMPLER_TIME**: time between one sample and another (ms)
2. **SAMPLE_QTY**: quantity of samples to make the average 
3. **DEBUG_MODE**: if you wan to see comments on the console, set this variable in **true**

finally, install dependencies run:

`npm install`

and then run:

`npm run dev` or `npm start` to start service

Enjoy it :)