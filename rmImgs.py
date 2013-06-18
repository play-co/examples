import os
import subprocess

counts = {
	'img': 0
}

def scanDir(nothing, dirname, fnames):
	if dirname.endswith('icons') or dirname.endswith('splash'):
		for fname in [os.path.join(dirname, f) for f in fnames if f.endswith('.png')]:
			subprocess.call("git rm %s"%(fname,), shell=True)
			counts['img'] += 1

if __name__ == '__main__':
	os.path.walk('.', scanDir, None)
	print 'removed %s images'%(counts['img'],)