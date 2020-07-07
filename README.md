# proj11-covidTracker

1. clone and cd to this repo then create virtual environment with "python3 -m venv env"
2. activate the virtual environment with "source env/bin/activate"
3. install dependencies with "env/bin/pip install -r requirements.txt"

To run Django server
1. cd to backend
2. run "python3 manage.py runserver"

To run React server
1. cd to frontend
2. run "yarn start"

this process might take up to several minutes


Some other info 
- Django server will be up on localhost:8000
- React and User UIs will be up on localhost:3000
- React uses axios to retrieve or update data in Django via rest API
- need to create .env file with google API key. Didn't include the file this time but I can provide one. 
- react-sidebar and react-google-maps are used in React as of now. 
