#########################################################
#########################################################
##                                                     ##
## This script is testing python source codes for      ##
## compatibility across different python interpreters. ##
## REQUIREMENTS:                                       ##
##  - python from 2.4 to 3.3, any will do              ##
##  - python interpreters to test the *.py files       ##
##  - py.test (easy_install -U pytest)                 ##
## Script now runs as follows:                         ##
##  - copy the script to local directory, where the    ##
##    *.py files you want to test are                  ##
##  - run "py.test -vl test_interpreters.py"           ##
##  - script will recursively test all the *.py        ##
##    files it can find in actual directory and also   ##
##    in subdirectories                                ##
##  - look at the results.                             ##
##                                                     ##
## !!!WARNING!!!WARNING!!!WARNING!!!WARNING!!!WARNING! ##
##                                                     ##
## THIS SCRIPT DELETES ALL THE *.pyc FILES AFTERWARDS. ##
## EVEN THOSE NOT CREATED BY THIS SCRIPT.              ##
##                                                     ##
#########################################################
#########################################################

asd tralala
#This script is hugely inspired by: http://pytest.org/latest/example/parametrize.html#indirect-parametrization-with-multiple-fixtures

#How to install multiple python interpreters: http://pythonists.blogspot.cz/2011/11/installing-multiple-versions-of-python.html

#py - for executing py.process.cmdexec
#pytest - default library
import py, pytest

#list of interpreters to test against
#you may change this as you will
pythonlist = ['python2.4', 'python2.5', 'python2.6', 'python2.7', 'python2.8', 'python3.0', 'python3.1', 'python3.2', 'python3.3']

#this fixture causes multiple runs of the test with different interpreters
@pytest.fixture(params = pythonlist)
#intertest - tests *.py against different interpreters
#@request - interpreter from pytest.fixture (from pythonlist)
def intertest(request):
	return Python(request.param)

#Python - support class for running tests
class Python:
	def __init__(self, version):
		#change pythonpath to actual interpreter
		self.pythonpath = py.path.local.sysfind(version)
		#if the string is empty, skip the test
		if not self.pythonpath:
			py.test.skip("%r not found" %(version,))

	def doit(self):
		#this will try to compile all the *.py files from local directory (recursively)
		#with different interpreters. If the compile process ends without error,
		#your code is compatible with actual interpreter.
		py.process.cmdexec('%s -m py_compile `find . -name \*.py`' % self.pythonpath)

#run the test
def test_run(intertest):
	#calls the test
	intertest.doit()
	#clean up. This will delete any *.pyc file recursively from local directory.
	#!!!WARNING: this will delete even those .pyc files that it did not create!!!
	py.process.cmdexec('rm `find . -name \*.pyc`')
        #clean up. Removes the __pycache__ directory.
        py.process.cmdexec('rm -r __pycache__')
