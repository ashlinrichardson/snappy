#!/usr/bin/python2
'''
  1. set up python2 on ubuntu 20 
  2. set up pip for python2 (instructions at bottom of file)
  3. set up the deps here
  4. install ESA SNAP and configure snappy! 
  oops these things are out of order..
'''


import os
import sys
# ~/snap/bin$ ./snappy-conf /usr/bin/python2

def run(c):
    print('[' + c + ']')
    a = os.system(c)

def pip(p):
    t = str(type(p))
    if len(t.split('str')) > 1:
        run('python2 -m pip install ' + p)
    elif len(t.split('list')) > 1:
        for x in p:
            pip(x)

run('sudo apt install python-tk')
# run('sudo apt install jython')
run('sudo apt install --reinstall libpython2.7')

pip(['numpy',
     'matplotlib',
     'tk',
     'tkinter'])


# build and install snappy package
run('cd ~/.snap/; python2 setup.py build')
run('cd ~/.snap/; sudo python2 setup.py install')



'''
Pip for Python 2 is not included in the Ubuntu 20.04 repositories.
You need to install pip for Python 2 using the get-pip.py script.

1. Start by enabling the universe repository:

sudo add-apt-repository universe

2. Update the packages index and install Python 2:

sudo apt update
sudo apt install python2

3. Use curl to download the get-pip.py script:

curl https://bootstrap.pypa.io/get-pip.py --output get-pip.py

4. Once the repository is enabled, run the script as sudo user with python2 to install pip :

sudo python2 get-pip.py

'''
