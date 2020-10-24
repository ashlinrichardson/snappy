#!/usr/bin/python2

import os # usual python stuff
import math
import numpy as np
import matplotlib.pyplot as plt

import snappy # ESA SNAP stuff
from snappy import ProductIO

filename = 'S2A_MSIL2A_20190809T195901_N0213_R128_T09VUE_20190810T001439_subset_resampled.tif' # sample image data

df = ProductIO.readProduct(filename) # use SNAP API to open the data
band_names = list(df.getBandNames())  # list the band names!
print('band_names', band_names)

samples = df.getSceneRasterWidth() # Get Band Width
lines = df.getSceneRasterHeight() # Get Band Height# Create an empty array
npx = samples * lines # number of pixels in scene

band_data = np.zeros(lines * samples, np.float32) # buffer for one band
data = np.zeros((lines, samples, 3), np.float32)  # buffer for whole image

nband = len(band_names)
if nband != 3:
    print('Error: this example expects 3 bands to plot in colour'); sys.exit(1)

for i in range(0, nband):
    print("Read band", i + 1, "of", nband)
    band = df.getBand(band_names[i])  # read one band
    band.readPixels(0, 0, samples, lines, band_data)
    band_data = band_data.reshape(lines, samples)
 
    mn, mx= np.min(band_data), np.max(band_data)  # scale band to [0, 1]
    band_data -= mn
    band_data /= (mx - mn)

    values = band_data  # so called 1% linear stretch
    values = values.reshape(np.prod(values.shape)).tolist()
    values.sort()

    if values[-1] < values[0]:  # sanity check
        err("failed to sort values")

    for j in range(0, npx - 1):  # sanity check
        if values[j] > values[j + 1]:
            err("failed to sort values")

    mn = values[int(math.floor(float(npx) * 0.01))]  # apply the stretch
    mx = values[int(math.floor(float(npx) * 0.99))]
    band_data -= mn
    band_data /= (mx - mn)

    data[:, :, i] = band_data  # put all the bands in one array

# plot the data
plt.figure()
plt.imshow(data)
plt.tight_layout()
plt.savefig(filename + '.png')
