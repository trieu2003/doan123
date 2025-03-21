from matplotlib.figure import Figure
import mysql.connector
import tkinter as tk
from tkinter import *
from tkinter import ttk, messagebox, filedialog
import csv
import time
import ttkthemes
import pandas as pd
import numpy as np
from PIL import ImageTk, Image,ImageDraw
import matplotlib.pyplot as plt
from tensorflow import keras
import tensorflow as tf
from tensorflow.keras.applications.inception_v3 import InceptionV3
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, Flatten, MaxPooling2D, Dense, Dropout, GlobalAveragePooling2D
from tensorflow.keras import optimizers, losses
from tensorflow.keras.callbacks import ModelCheckpoint
from tensorflow.keras.preprocessing import image
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.backends.backend_tkagg import NavigationToolbar2Tk

import pickle
import os
import numpy as np
import matplotlib.pyplot as plt
current_dir = os.getcwd()
count = 0
text =''
def slider():
    global text,count
    if count==len(s):
        count = 0
        text=''
    text=text+s[count]
    sliderLabel.config(text=text)
    count+=1
    sliderLabel.after(700,slider)
def clock():
    date = time.strftime('%d/%m/%Y')
    currenttime = time.strftime('%H:%M:%S')
    datetimeLabel.config(text=f'Date: {date}\nTime: {currenttime}')
    datetimeLabel.after(1000,clock)
    
filetypes=(
            ('csv files', '*.csv'),
            ('text files','*.txt'),
            ('All files', '*.*')
        ) 
filetypes_IMAGE =(
    ("jpeg images","*.jpg"),
    ("png images","*.png")
    
)  
#connection db 
#db  = mysql.connector.connect(user='root',password='rootadmin123',host='localhost',db='test1')
#mycursor = db.cursor()
#_Channel,_Region,_Fresh,_Milk,_Grocery,_Frozen,_Detergents_Paper,_Delicassen

def remove_stropen(path):
  return path.replace("(", "").replace(")", "").replace("'", "").replace(":", ":").replace("/", "/").replace(",","")
# def Analyst_data():
    # url_open = filedialog.askopenfilenames(
    #     title='Open files',
    #     initialdir='/',
    #     filetypes=filetypes)
    
    # link = remove_stropen(str(url_open))
    # data = pd.read_csv(str(link))
    # print(len(data))
    # #the model might become biased towards the variables with a higher magnitude
    # data_scaled = normalize(data)
    # #Channel,Region,Fresh,Milk,Grocery,Frozen,Detergents_Paper,Delicassen
    # data_scaled = pd.DataFrame(data_scaled, columns=data.columns)
    # print(data_scaled['Channel'][1])
    # with open ("datascale.csv",mode="w") as csvfile:
    #     fieldnames = ["Channel","Region","Fresh","Milk","Grocery","Frozen","Detergents_Paper","Delicassen"]
    #     writer = csv.DictWriter(csvfile,fieldnames=fieldnames)
    #     writer.writeheader()
    #     i = 0
    #     for i in range(len(data)):
    #         writer.writerow({"Channel": data_scaled['Channel'][i],"Region": data_scaled['Region'][i], "Fresh": data_scaled['Fresh'][i], "Milk": data_scaled['Milk'][i],"Grocery": data_scaled['Grocery'][i],"Frozen": data_scaled['Frozen'][i],"Frozen": data_scaled['Frozen'][i],"Detergents_Paper": data_scaled['Detergents_Paper'][i],"Delicassen": data_scaled['Delicassen'][i] })
#     #Dendrogram
    #plt.figure(figsize=(10, 7))  
    #plt.title("Dendrograms")
    #z = shc.linkage(data_scaled, method='ward')

#     dend = shc.dendrogram(z)
#     plt.axhline(y=0.75, color='r', linestyle='--')
#     cluster = AgglomerativeClustering(n_clusters=3, affinity='euclidean', linkage='ward')
#     cluster.fit_predict(data_scaled)
#     cluster.labels_
#     plt.figure(figsize=(7, 7))  
#     plt.scatter(data_scaled['Milk'], data_scaled['Grocery'], c=cluster.labels_)
#     plt.figure(figsize=(7, 7))  
#     plt.scatter(data['Milk'], data['Grocery'], c=cluster.labels_)
#     plt.show()







def ConnectionMySQL():
    def connect():
        global mycursor,con
        try:
            #con = mysql.connector.connect(host='localhost',user='root',password='rootadmin123')
            con = mysql.connector.connect(host=hostEntry.get(),user=usernameEntry.get(),password=passwordEntry.get())
            mycursor = con.cursor()
        except:
            messagebox.showerror('Error','Error Infomation, Pls Check Connection MYSQL, USERNAME AND PASSWORD WAS UPDATED',parent=connectWindow)
            return
        try:
            query ='create database Predict_Flowers'
            mycursor.execute(query)
            query = 'use Predict_Flowers'
            mycursor.execute(query)
            query='''CREATE TABLE Data_Trainned (
                        ID SERIAL PRIMARY KEY,
                        FILE_PATH VARCHAR(256),
                        DAISY VARCHAR(256),
                        DANDELION VARCHAR(256),
                        ROSE VARCHAR(256),
                        SUNFLOWER VARCHAR(256),
                        TULIP VARCHAR(256),
                        Result VARCHAR(256))
                '''
            print('323')
            mycursor.execute(query)
        except:
            query='use Predict_Flowers'
            print('326')
            mycursor.execute(query)
        messagebox.showinfo('Success','Database Connection is successful!',parent=connectWindow)
        btn_browse.config(state=NORMAL)
        search_ele_Button.config(state=NORMAL)
        add_ele_Button.config(state=NORMAL)
        Show_ele_Button.config(state=NORMAL)
        Exit_ele_Button.config(state=NORMAL)
        connectWindow.destroy()
        

    connectWindow = Toplevel()
    connectWindow.grab_set()
    connectWindow.geometry('470x250+730+230')
    connectWindow.title('Data base Connection')
    connectWindow.resizable(0,0)
    
    hostnameLavbel = Label(connectWindow,text='Host Name', font=('arial',20,'bold'))
    hostnameLavbel.grid(row=0,column=0,padx=20,)
    
    hostEntry = Entry(connectWindow,font=('roman',15,'bold'),bd=2)
    hostEntry.grid(row=0,column=1,padx=40, pady=20)
    
    usernameLavbel = Label(connectWindow,text='User Name', font=('arial',20,'bold'))
    usernameLavbel.grid(row=1,column=0,padx=20,)
    
    usernameEntry = Entry(connectWindow,font=('roman',15,'bold'),bd=2)
    usernameEntry.grid(row=1,column=1,padx=40, pady=20)
    
    passwordLavbel = Label(connectWindow,text='Password', font=('arial',20,'bold'))
    passwordLavbel.grid(row=2,column=0,padx=20,)
    
    passwordEntry = Entry(connectWindow,font=('roman',15,'bold'),bd=2)
    passwordEntry.grid(row=2,column=1,padx=40, pady=20)
    
    connectButton = ttk.Button(connectWindow,text='Connection',command=connect)
    connectButton.grid(row=3,columnspan=2)
    
class AI:
    def __init__(self,ID,FILE_PATH,DAISY,DANDELION,ROSE,SUNFLOWER,TULIP,Result) :
        self.ID = ID
        self.FILE_PATH = FILE_PATH
        self.DAISY =DAISY
        self.DANDELION = DANDELION
        self.ROSE = ROSE
        self.SUNFLOWER = SUNFLOWER
        self.TULIP = TULIP
        self.Result = Result
#user='root',password='123456',host='localhost',db='Predict_Flowers'
def read_file(filename):
    with open(filename,'r') as file:
        reader = csv.reader(file)
        connection  = mysql.connector.connect(user='root',password='123456',host='localhost',db='Predict_Flowers')
        cursor = connection.cursor()
        for rows in reader:
            cursor.execute('INSERT INTO Data_Trainned (FILE_PATH,DAISY,DANDELION,ROSE,SUNFLOWER,TULIP,Result) VALUES(%s,%2.f,%2.f,%2.f,%2.f,%2.f,%s)',rows)
        connection.commit()
    cursor.close()
    connection.close()
    print('Successfully!')


loaded_best_model = keras.models.load_model(os.path.join(current_dir, 'best.keras'))





root = ttkthemes.ThemedTk()

root.get_themes()

root.set_theme('radiance')

root.title('Flower🌷Image🌼Classification🌻|Transfer Learning : By LA HOANG PHUC HUIT')
root.geometry("1450x730")


datetimeLabel = Label(root,font=('times new roman',18,'bold'))
datetimeLabel.place(x=3,y=3)
clock()

s = 'Classification|Transfer Learning'


sliderLabel = Label(root,font=('arial',28, 'italic bold'),width=35)
sliderLabel.place(x=200,y=0)
slider()
connectButton = ttk.Button(root,text='Connect DataBase',command=ConnectionMySQL)
connectButton.place(x=1250,y=0)

leftFrame =Frame(root)
leftFrame.place(x=50,y=80,width=300,height=600)

logo_image = PhotoImage(file='D:\\HK6\MachineLearning\\hierarchicalclustering\\Project_AI\\analyst.png')
logo_Label = Label(leftFrame,image=logo_image)
logo_Label.grid(row=0,column=0)


# lbl_pic_path = ttk.Label(leftFrame,text="Images Path: ",font=('verdana',16),borderwidth=2, relief="groove")

# entry_pic_path = ttk.Label(leftFrame,text=('verdana',16),background='red')


# btn_browse.grid(row=5,column=0, columnspan="2",pady=30,padx=30)

def selectPic():
    global img
    filename = filedialog.askopenfilename(initialdir="/images",title="Select Image",filetypes=(filetypes_IMAGE))
    img = Image.open(filename)
    img = img.resize((400,330),Image.Resampling.LANCZOS)
    img = ImageTk.PhotoImage(img)
    lbl_show_pic['image'] = img
    return filename                                           



add_ele_Button = ttk.Button(leftFrame,text='Browse Image',width=25, state=NORMAL,command=selectPic)
add_ele_Button.grid(row=1,column=0,pady=20)



def showelements():
    add_window = Toplevel()
    add_window.title('Show Element by Database ')
    add_window.grab_set()
    add_window.geometry("1280x600")
    add_window.resizable(False,False)

    leftFrame =Frame(add_window)
    leftFrame.place(x=50,y=80,width=400,height=600)
    Btn_Update_Element = ttk.Button(leftFrame,text='Update',width=25, state=NORMAL)
    Btn_Update_Element.grid(row=2,column=0,pady=20)

    rightFrame =Frame(add_window)
    rightFrame.place(x=350,y=0,width=900,height=600)
    # XpathLabel = Label(add_window,text='Xpath',font=('time new roman',20,'bold'))
    # XpathLabel.grid(row = 0,column=0,padx=30,pady=15,sticky=W)
    scrollBarX = Scrollbar(rightFrame,orient=HORIZONTAL)
    scrollBarY = Scrollbar(rightFrame,orient=VERTICAL)


    column = ('ID','FILE_PATH','DAISY','DANDELION','ROSE','SUNFLOWER','TULIP','RESULT')

    Element_table = ttk.Treeview(rightFrame,columns=(column),xscrollcommand=scrollBarX.set,yscrollcommand=scrollBarY.set)

    scrollBarX.config(command=Element_table.xview)
    scrollBarY.config(command=Element_table.yview)

    scrollBarX.pack(side=BOTTOM,fill=X)
    scrollBarY.pack(side=RIGHT,fill=Y)

    Element_table.pack(fill=BOTH,expand=1)
    Element_table.config(show='headings')
    for col in column:
        Element_table.heading(col,text=col,anchor=CENTER)
        Element_table.column('ID',width=130,anchor=CENTER)
        Element_table.column('FILE_PATH',width=230,anchor=CENTER)    
        Element_table.column('DAISY',width=130,anchor=CENTER)
        Element_table.column('DANDELION',width=130,anchor=CENTER)  
        Element_table.column('ROSE',width=130,anchor=CENTER)
        Element_table.column('SUNFLOWER',width=130,anchor=CENTER)  
        Element_table.column('TULIP',width=130,anchor=CENTER)
        Element_table.column('RESULT',width=130,anchor=CENTER)  
    query = 'select * from Data_Trainned'
    mycursor.execute(query)
    fetched_data = mycursor.fetchall()
    Element_table.delete(*Element_table.get_children())
    for data in fetched_data:
        Element_table.insert('',END,values=data)

    # delete
    def delete_Element():
        
        indexing = Element_table.focus()
        content = Element_table.item(indexing)
        content_ID = content['values'][0]
        content_FILE_PATH = content['values'][1]
        content_DAISY = content['values'][2]
        content_DANDELION = content['values'][3]
        content_ROSE = content['values'][4]
        content_SUNFLOWER = content['values'][5]
        content_TULIP = content['values'][6]
        content_RESULT = content['values'][7]
        result = messagebox.askyesno('Confirm',f'Data added successfully! Do you want to delete this element? ID = {content_ID} RESULT: {str.upper(content_RESULT)}',parent=add_window)
        if(result):
            query = 'delete from Data_Trainned where ID = (%s) and FILE_PATH = (%s) and DAISY = (%s) and DANDELION = (%s) and ROSE = (%s) and SUNFLOWER = (%s) and TULIP =(%s) and RESULT = (%s)'
            mycursor.execute(query,(content_ID,content_FILE_PATH,content_DAISY,content_DANDELION,content_ROSE,content_SUNFLOWER,content_TULIP,content_RESULT))
            con.commit()
            messagebox.showinfo('Deleted',f'Delete ID: {content_ID} and FILE_PATH: {content_FILE_PATH} and DAISY: {content_DAISY} and DANDELION: {content_DANDELION} and ROSE: {content_ROSE} and SUNFLOWER: {content_SUNFLOWER} and TULIP: {content_TULIP} and RESULT: {content_RESULT} is Successfully! ')
            query = 'select * from Data_Trainned'
            mycursor.execute(query)
            fetched_data = mycursor.fetchall()
            Element_table.delete(*Element_table.get_children())
            for data in fetched_data:
                Element_table.insert('',END,values=data)
        else:
            pass
    
    def export_data():
        url=filedialog.asksaveasfilename(filetypes=filetypes,defaultextension='.csv')
        indexing = Element_table.get_children()
        newlist =[]
        for index in indexing:
            content = Element_table.item(index)
            datalist = content['values']
            newlist.append(datalist)

        table=pd.DataFrame(newlist,columns=['ID','FILE_PATH','DAISY','DANDELION','ROSE','SUNFLOWER','TULIP','Result'])
        table.to_csv(url,index=False)
        messagebox.showinfo('Sucess','Data is saved sucessfully')
    
          
    Btn_Delete_Element = ttk.Button(leftFrame,text='Delete Element',width=25, state=NORMAL,command=delete_Element)
    Btn_Delete_Element.grid(row=4,column=0,pady=20)
    
    Export_ele_Button = ttk.Button(leftFrame,text='Export Data',width=25, state=NORMAL,command=export_data)
    Export_ele_Button.grid(row=5,column=0,pady=20)  


Show_ele_Button = ttk.Button(leftFrame,text='Show List Element',width=25, state=NORMAL,command= showelements)
Show_ele_Button.grid(row=5,column=0,pady=20)


def Exit():
    root.destroy()
Exit_ele_Button = ttk.Button(leftFrame,text='Thoát',width=25, state=NORMAL,command=Exit)
Exit_ele_Button.grid(row=7,column=0,pady=20)




rightFrame =Frame(root)
rightFrame.place(x=350,y=80,width=1500,height=800)# 850 800



lbl_show_pic = ttk.Label(rightFrame)
lbl_show_pic.place(x=0,y=0,width=400,height=330)
btn_browse = ttk.Button(leftFrame,text='Browse',width=20)

btn_browse['command'] = selectPic



lbl_output = ttk.Label(rightFrame,text='O U T P U T',font=('Times New Roman',20,'bold'),foreground='red')
lbl_output.place(x=0,y=350,width=155,height=30)

lbl_text_roses = ttk.Label(rightFrame,text='Roses',font=('Times New Roman',18,'bold'),foreground='blue')
lbl_text_roses.place(x=0,y=390,width=70,height=30)
lbl_result_roses = ttk.Label(rightFrame,text='0%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
lbl_result_roses.place(x=100,y=390,width=40,height=30)


lbl_text_tulips = ttk.Label(rightFrame,text='Tulips',font=('Times New Roman',18,'bold'),foreground='blue')
lbl_text_tulips.place(x=0,y=440,width=70,height=30)
lbl_result_tulips = ttk.Label(rightFrame,text='0%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
lbl_result_tulips.place(x=100,y=440,width=40,height=30)

lbl_text_daisy = ttk.Label(rightFrame,text='Daisy',font=('Times New Roman',18,'bold'),foreground='blue')
lbl_text_daisy.place(x=0,y=490,width=70,height=30)
lbl_result_daisy = ttk.Label(rightFrame,text='0%', anchor="e",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
lbl_result_daisy.place(x=100,y=490,width=40,height=30)

lbl_text_sunflowers = ttk.Label(rightFrame,text='Sunflowers',font=('Times New Roman',18,'bold'),foreground='blue')
lbl_text_sunflowers.place(x=0,y=540,width=120,height=30)
lbl_result_sunflowers = ttk.Label(rightFrame,text='0%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
lbl_result_sunflowers.place(x=140,y=540,width=40,height=30)


lbl_text_dandelion = ttk.Label(rightFrame,text='Dandelion',font=('Times New Roman',18,'bold'),foreground='blue')
lbl_text_dandelion.place(x=0,y=590,width=110,height=30)
lbl_result_dandelion = ttk.Label(rightFrame,text='0%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
lbl_result_dandelion.place(x=140,y=590,width=40,height=30)

lbl_result_FLOWER = ttk.Label(rightFrame,text='', justify="center",font=('Rockwell Extra Bold',20,'bold'))
lbl_result_FLOWER.place(x=700,y=510,width=220,height=40)


lbl_text_Predictions = ttk.Label(rightFrame,text='Predictions',font=('Times New Roman',18,'bold'),foreground='blue')
lbl_text_Predictions.place(x=700,y=480,width=120,height=30)

def Delete_button_action():
    predictions_FLOWER.plots_action
    #.config(text=' ', width=40)
def predictions_FLOWER(img_rel_path):
    # Import Image from the path with size of (300, 300)
    img = image.load_img(img_rel_path, target_size=(300, 300))

    # Convert Image to a numpy array
    img = image.img_to_array(img, dtype=np.uint8)

    # Scaling the Image Array values between 0 and 1
    img = np.array(img)/255.0

    # Plotting the Loaded Image
    plt.title("Loaded Image")
    plt.axis('off')
    plt.imshow(img.squeeze())
    plt.show()

    # Get the Predicted Label for the loaded Image
    p = loaded_best_model.predict(img[np.newaxis, ...])

    # Label array
    labels = {0: 'daisy', 1: 'dandelion', 2: 'rose', 3: 'sunflower', 4: 'tulip'}

    print("\n\nMaximum Probability: ", np.max(p[0], axis=-1))
    predicted_class = labels[np.argmax(p[0], axis=-1)]
    lbl_result_FLOWER = ttk.Label(rightFrame,text=predicted_class, justify="center",font=('Rockwell Extra Bold',20,'bold'),foreground='red')
    lbl_result_FLOWER.place(x=700,y=510,width=220,height=50)
    print("Classified:", predicted_class, "\n\n")

    classes=[]
    prob=[]
    print("\n-------------------Individual Probability--------------------------------\n")

    for i,j in enumerate (p[0],0):
        print('i= '+str(i)+' j = '+str(j));
        print(labels[i].upper(),':',round(j*100,2),'%')
        classes.append(labels[i])
        prob.append(round(j*100,2))

    array_int = [round(int(string)) for string in prob]
    width_daisy = ((array_int[0]%100)*4)
    if(width_daisy <=30):
        width_daisy = 40
    lbl_result_daisy = ttk.Label(rightFrame,text=str(array_int[0])+'%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
    lbl_result_daisy.place(x=100,y=490,width=width_daisy,height=30)


    width__dandelion=((array_int[1]%100)*4)
    if(width__dandelion <=30):
        width__dandelion = 40
    lbl_result_dandelion = ttk.Label(rightFrame,text=str(array_int[1])+'%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
    lbl_result_dandelion.place(x=140,y=590,width=(width__dandelion),height=30)

    width_roses =((array_int[2]%100)*4)
    if(width_roses <=30):
        width_roses = 40
    lbl_result_roses = ttk.Label(rightFrame,text=str(array_int[2])+'%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
    lbl_result_roses.place(x=100,y=390,width=width_roses,height=30)

    width__sunflowers= ((array_int[3]%100)*4)
    if(width__sunflowers <=30):
        width__sunflowers = 40
    lbl_result_sunflowers = ttk.Label(rightFrame,text=str(array_int[3])+'%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
    lbl_result_sunflowers.place(x=140,y=540,width=width__sunflowers,height=30)
   
    
   
    width__tulips=((array_int[4]%100)*4)
    if(width__tulips <=30):
        width__tulips = 40
    
    lbl_result_tulips = ttk.Label(rightFrame,text=str(array_int[4])+'%', anchor="e", justify="right",font=('Times New Roman',18,'bold'),foreground='white',background='gray')
    lbl_result_tulips.place(x=100,y=440,width=width__tulips,height=30)
    
    #fig = Figure(figsize=(5,5),dpi=100)    
    def plot_bar_x():
        # this is for plotting purpose
        index = np.arange(len(classes))
        plt.bar(index, prob)
        plt.xlabel('Labels', fontsize=8)
        plt.ylabel('Probability', fontsize=8)
        plt.xticks(index, classes, fontsize=8, rotation=20)
        plt.title('Probability for loaded image')
        filename = 'test' 
        plt.savefig(filename+'.png')
        #kích thước
        # my_image = PhotoImage(file='test.png',width=640,height=440)
        lbl_plot = ttk.Label(root)
        image = Image.open(filename + '.png')
        photo = ImageTk.PhotoImage(image)
        
        # Hiển thị hình ảnh lên label
        lbl_plot.config(image=photo)
        lbl_plot.image = photo
        lbl_plot.place(x=840,y=50,width=640,height=500)
        #lbl_plot.place(x=600,y=0,width=800,height=330)
        #plt.show()
    plot_bar_x()
    def add_automation():
        try:
            result = messagebox.askyesno('Confirm','Do you want to add the trained information to the database?')
            if(result):
                query = 'insert into Predict_Flowers.Data_Trainned(FILE_PATH, DAISY, DANDELION, ROSE, SUNFLOWER, TULIP, Result) values(%s,%s,%s,%s,%s,%s,%s)'
                print(img_rel_path)
                print(str(array_int[0]))
                print(predicted_class)
                mycursor.execute(query,(img_rel_path,str(prob[0]),str(prob[1]),str(prob[2]),str(prob[3]),str(prob[4]),predicted_class))
                con.commit()
                messagebox.showinfo('SAVE MODEL RESULT ','SAVE SUCESSFULLY! THANKS YOU USED TO IT.')
        except:
            messagebox.showinfo('SAVE MODEL RESULT ','SAVE FAILED! PLEASE TRY AGAIN.')
    add_automation()
    def Reset_action1():
        print('ok')
        lbl_result_daisy.config(text='0%', width=40, anchor="w",background='',foreground='gray')
        lbl_result_dandelion.config(text='0%', width=40, anchor="w",background='',foreground='gray')
        lbl_result_roses.config(text='0%', width=40, anchor="w",background='',foreground='gray')
        lbl_result_sunflowers.config(text='0%', width=40, anchor="w",background='',foreground='gray')
        lbl_result_tulips.config(text='0%', width=40, anchor="w",background='',foreground='gray')
        lbl_result_FLOWER.config(text='')
    
    Reset_action = ttk.Button(leftFrame,text='Reset Element',width=25, state=NORMAL,command=Reset_action1)
    Reset_action.grid(row=3,column=0,pady=20)
  
def train():
    images_text = selectPic()
    #print("PATH: " +images_text)
    array_int= predictions_FLOWER(images_text)
    
    #predictions_FLOWER(os.path.join(current_dir, 'flowers-dataset', 'test','Image_1.jpg'))





search_ele_Button = ttk.Button(leftFrame,text='Predictions Element',width=25, state=DISABLED,command=train)
search_ele_Button.grid(row=2,column=0,pady=20)


def add_element():
    def open_folder_and_get_path():
        folder_path = filedialog.askdirectory()
        if folder_path:
            XpathEntry.delete(0, tk.END)  # Xóa nội dung cũ của Entry trước khi đặt nội dung mới
            XpathEntry.insert(0, folder_path) 
    
    def add_data():
        if XpathEntry.get() =='' or DaisyEntry.get() == '' or DandelionEntry.get() == '' or RoseEntry.get() == '' or SunflowerEntry.get() == '' or TulipEntry.get() == '' or ResultEntry.get() == '':
            messagebox.showerror('Error','All Fields are required',parent=add_window)
        else:
            query = 'insert into Predict_Flowers.Data_Trainned(FILE_PATH, DAISY, DANDELION, ROSE, SUNFLOWER, TULIP, Result) values(%s,%s,%s,%s,%s,%s,%s)'
            mycursor.execute(query,(XpathEntry.get(),DaisyEntry.get(),DandelionEntry.get(),RoseEntry.get(),SunflowerEntry.get(),TulipEntry.get(),ResultEntry.get()))
            con.commit()
            result = messagebox.askyesno('Confirm','Data added successfully! Do you want to clean the form?',parent=add_window)
            if(result):
                XpathEntry.delete(0,END)
                DaisyEntry.delete(0,END)
                DandelionEntry.delete(0,END)
                RoseEntry.delete(0,END)
                SunflowerEntry.delete(0,END)
                TulipEntry.delete(0,END)
                ResultEntry.delete(0,END)
            else:
                pass    
            # query = 'select * from overview'
            # mycursor.execute(query)
            # fetched_data =mycursor.fetchall()
            # Element_table.delete(*Element_table.get_children())
            # for data in fetched_data:
            #     Element_table.insert('',END,values=data)
            
    add_window = Toplevel()
    add_window.title('Add Element')
    add_window.grab_set()
    add_window.resizable(False,False)
    XpathLabel = Label(add_window,text='Xpath',font=('time new roman',20,'bold'))
    XpathLabel.grid(row = 0,column=0,padx=30,pady=15,sticky=W)

    XpathEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    XpathEntry.grid(row = 0, column=1,padx=15,pady=10)
    
    DaisyLabel = Label(add_window,text='Region',font=('time new roman',20,'bold'))
    DaisyLabel.grid(row = 1,column=0,padx=30,pady=15,sticky=W)
    DaisyEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    DaisyEntry.grid(row = 1, column=1,padx=15,pady=10)
    
    DandelionLabel = Label(add_window,text='Fresh',font=('time new roman',20,'bold'))
    DandelionLabel.grid(row = 2,column=0,padx=30,pady=15,sticky=W)
    DandelionEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    DandelionEntry.grid(row = 2, column=1,padx=15,pady=10)
    
    RoseLabel = Label(add_window,text='Milk',font=('time new roman',20,'bold'))
    RoseLabel.grid(row = 3,column=0,padx=30,pady=15,sticky=W)
    RoseEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    RoseEntry.grid(row = 3, column=1,padx=15,pady=10)
    
    SunflowerLabel = Label(add_window,text='Grocery',font=('time new roman',20,'bold'))
    SunflowerLabel.grid(row = 4,column=0,padx=30,pady=15,sticky=W)
    SunflowerEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    SunflowerEntry.grid(row = 4, column=1,padx=15,pady=10)
    
    TulipLabel = Label(add_window,text='Frozen',font=('time new roman',20,'bold'))
    TulipLabel.grid(row = 5,column=0,padx=30,pady=15,sticky=W)
    TulipEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    TulipEntry.grid(row = 5, column=1,padx=15,pady=10)
    
    ResultLabel = Label(add_window,text='Result',font=('time new roman',20,'bold'))
    ResultLabel.grid(row = 6,column=0,padx=30,pady=15,sticky=W)
    ResultEntry = Entry(add_window,font=('roman',15,'bold'),width=24)
    ResultEntry.grid(row = 6, column=1,padx=15,pady=10)

    button = tk.Button(add_window, text="Open Folder", command=open_folder_and_get_path)
    button.grid(row=7,columnspan=2,pady=15)

    add_element_button =ttk.Button(add_window,text='ADD ELEMENT',command=add_data)
    add_element_button.grid(row=8,columnspan=2,pady=15)
    
add_ele_Button = ttk.Button(leftFrame,text='Save To Database',width=25, state=DISABLED,command=add_element)
add_ele_Button.grid(row=4,column=0,pady=20)

root.mainloop()




        