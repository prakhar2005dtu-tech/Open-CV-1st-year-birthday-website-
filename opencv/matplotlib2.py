# import matplotlib.pyplot as plt  # Correct import
# import numpy as np

# xpoints = np.array([5,8,90,6])
# ypoints = np.array([3,8,1,50])

# plt.subplot(2,1,1)

# plt.plot(xpoints, ypoints,'o-')
# plt.xlabel("x-axis")
# plt.ylabel("y-axis")
# plt.title("matplotlib")
# plt.grid()
# # plt.plot(xpoints, ypoints)
# # plt.plot(ypoints,linestyle='dotted')


# # plot2
# x=np.array([20,5,6,100])
# y=np.array([3,1,8,4])
# plt.subplot(2,1,2)
# plt.plot(x,y,'o-')
# plt.show()


# scatter
# x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
# y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])
# # plt.plot(x,y,'o')
# plt.scatter(x,y)
# plt.show()

# x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
# y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])

# plt.scatter(x, y)

# #day two, the age and speed of 15 cars:
# # x = np.array([2,2,8,1,15,8,12,9,7,3,11,4,7,14,12])
# # y = np.array([100,105,84,105,90,99,90,95,94,100,79,112,91,80,85])
# # color2=80
# # plt.scatter(x, y, c=color2,cmap="viridis")
# # plt.colorbar()

# plt.show()


import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_csv('C:/Users/Prakhar/OneDrive/Desktop/opencv/ai_dev_productivity.csv')
print(df.head())
plt.scatter(df['hours_coding'],df['sleep_hours'],c=df['cognitive_load'])
plt.xlabel('hours coding')
plt.ylabel('sleep hours')
plt.title('task sucess') 
plt.show()